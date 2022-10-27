// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import * as http from './http.service';

export function activate(context: vscode.ExtensionContext) {
    console.log("vscode",vscode);
	//callWebhook();
}

async function callWebhook() {
	console.log("await");

	await http.default.get("https://webhook.site/f4722056-8d9c-4303-bde5-c1d257e2b54c");	
}
// This method is called when your extension is deactivated
export function deactivate() {}
