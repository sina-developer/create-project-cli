import chalk from "chalk";
import fs from "fs";
import ncp from "ncp";
import path from "path";
import { promisify } from "util";
import execa from 'execa';
import Listr from "listr";
import { projectInstall } from "pkg-install";

const access = promisify(fs.access);
const copy = promisify(ncp);


async function copyTemplateFiles(options) {
    return copy(options.templateDirectory , options.targetDirectory , {
        clobber : false
    });
}

async function initGit(options){
    const result= await execa("git" , ['init'] , {
        cwd : options.targetDirectory,
    });
    if(result.failed){
        return Promise.reject(new Error('Failed to init git'));
    }
    return;
}


export async function createProject(options) {
    options = {
        ...options,
        targetDirectory : options.targetDirectory || process.cwd()
    };

    const currentFileUrl = import.meta.url;
    let templateDir = path.resolve(
        new URL(currentFileUrl).pathname,
        '../../templates',
        options.template.toLowerCase()
    );
    let index = templateDir.indexOf(":") + 2;
    if(templateDir.substr(index).indexOf(":") != -1){
        templateDir = templateDir.substr(index);
    }
    options.templateDirectory = templateDir;
    try {
        await access(templateDir , fs.constants.R_OK);
    } catch (err) {
        console.error('%s Invalid template name', chalk.red.bold('ERROR'));
        process.exit(1);
    }

    // console.log('Copy project files');
    // await copyTemplateFiles(options);
    const tasks = new Listr([
        {
            title : "Copy project files",
            task : () => copyTemplateFiles(options)
        },
        {
            title : "Init Git",
            task : () => initGit(options),
            enabled : () => options.git
        },
        {
            title : "install dependecies",
            task : () => projectInstall({
                cwd : options.targetDirectory,
            }),
            skip : () => !options.runInstall ? 'Pass --install to automatically install dependencies ' : undefined
        }
    ]);

    await tasks.run();

    console.log('%s project ready' , chalk.green.bold("DONE"));
    return true;
}