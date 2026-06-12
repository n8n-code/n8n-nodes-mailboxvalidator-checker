import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class MailboxvalidatorCheckerApi implements ICredentialType {
        name = 'N8nDevMailboxvalidatorCheckerApi';

        displayName = 'Mailboxvalidator Checker API';

        icon: Icon = { light: 'file:../nodes/MailboxvalidatorChecker/mailboxvalidator-checker.png', dark: 'file:../nodes/MailboxvalidatorChecker/mailboxvalidator-checker.dark.png' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: 'https://api.mailboxvalidator.com/',
                        required: true,
                        placeholder: 'https://api.mailboxvalidator.com/',
                        description: 'The base URL of your Mailboxvalidator Checker API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                Authorization: '=Bearer {{$credentials.apiKey}}',
                        },
                },
        };


}
