"use server"

import fs from "fs";
import path from "path";
import { PUBLIC_BLOG_PATH } from "./constants";

export async function getMarkdownFiles() {
    try {
        const files = fs.readdirSync('./public/' + PUBLIC_BLOG_PATH);

        const markdownFiles = files.filter((file) => path.extname(file) === ".md");

        return markdownFiles;
    } catch (error) {
        return false
    }
}

export async function readMarkdownFile(fileName: string) {
    try {
        const file = fs.readFileSync(`./public/${ PUBLIC_BLOG_PATH }/${ fileName }`, 'utf-8');

        return file;
    } catch (error) {
        return false
    }
}