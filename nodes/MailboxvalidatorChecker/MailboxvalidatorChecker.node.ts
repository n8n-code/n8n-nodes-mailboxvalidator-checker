import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { defaultDescription } from './resources/default';

export class MailboxvalidatorChecker implements INodeType {
        description: INodeTypeDescription = {
                displayName: 'Mailboxvalidator Checker',
                name: 'N8nDevMailboxvalidatorChecker',
                icon: { light: 'file:./mailboxvalidator-checker.png', dark: 'file:./mailboxvalidator-checker.dark.png' },
                group: ['input'],
                version: 1,
                subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
                description: 'Checks if email is from free provider, returns JSON or XML.',
                defaults: { name: 'Mailboxvalidator Checker' },
                usableAsTool: true,
                inputs: [NodeConnectionTypes.Main],
                outputs: [NodeConnectionTypes.Main],
                credentials: [
                        {
                                name: 'N8nDevMailboxvalidatorCheckerApi',
                                required: true,
                        },
                ],
                requestDefaults: {
                        baseURL: '={{\$credentials.url}}',
                        headers: {
                                Accept: 'application/json',
                                'Content-Type': 'application/json',
                        },
                },
                properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [
				{
					"name": "Default",
					"value": "Default",
					"description": ""
				}
			],
			"default": ""
		},
		...defaultDescription
                ],
        };
}
