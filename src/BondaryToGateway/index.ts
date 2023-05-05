export * from './instance';

import { ContactID, ContactPayload, Media } from '../Common';

export type MessageReceived = {
	platform: 'WA';
	timestamp: number;
	from: ContactID;
	body: string;
	to: ContactID;
	id: string;
	fromHostAccount: boolean;
	groupName?: string;
	media?: Media;
	boundaryId: string;
	quotedMessage: MessageReceived | undefined;
	contact: ContactPayload;
};
