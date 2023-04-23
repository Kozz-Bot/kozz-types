import { ContactID, Media, MessageID } from 'src/Common';

export type MessageReceived = {
	platform: 'WA';
	timestamp: number;
	from: ContactID;
	body: string;
	to: ContactID;
	id: MessageID;
	groupName?: string;
	media?: Media;
};
