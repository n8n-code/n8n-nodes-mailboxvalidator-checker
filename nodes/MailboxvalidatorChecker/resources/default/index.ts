import type { INodeProperties } from 'n8n-workflow';

export const defaultDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					]
				}
			},
			"options": [
				{
					"name": "GET v1 Email Free",
					"value": "GET v1 Email Free",
					"action": "GET v1 Email Free",
					"description": "The Free Email Checker API does validation on a single email address and returns if it is from a free email provider in either JSON or XML format.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/v1/email/free"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /v1/email/free",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET v1 Email Free"
					]
				}
			}
		},
		{
			"displayName": "Format",
			"name": "format",
			"description": "Return the result in json (default) or xml format.",
			"default": "json",
			"type": "options",
			"options": [
				{
					"name": "JSON",
					"value": "json"
				},
				{
					"name": "XML",
					"value": "xml"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "format",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET v1 Email Free"
					]
				}
			}
		},
		{
			"displayName": "Email",
			"name": "email",
			"required": true,
			"description": "The email address to check if is from a free email provider.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "email",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET v1 Email Free"
					]
				}
			}
		},
		{
			"displayName": "Key",
			"name": "key",
			"required": true,
			"description": "API key.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "key",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET v1 Email Free"
					]
				}
			}
		},
];
