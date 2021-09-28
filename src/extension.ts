import * as vscode from 'vscode';
import { CustomWebviewPanel } from "./CustomWebview";
export function activate(context: vscode.ExtensionContext) {

    context.subscriptions.push(vscode.commands.registerCommand('svelteviews.showWebview', () => {
        CustomWebviewPanel.createOrShow(context.extensionUri);
    }));
}
