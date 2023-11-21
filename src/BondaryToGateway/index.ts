export * from './instance';
export * from './ForwardableEvents';

import { ContactID, ContactPayload, Media } from '../Common';

export type MessageType =
	| 'STICKER'
	| 'TEXT'
	| 'VIDEO'
	| 'IMAGE'
	| 'AUDIO'
	| 'SONG'
	| 'OTHER';

export type MessageReceived = {
	platform: 'WA';
	timestamp: number | undefined;
	from: ContactID;
	body: string;
	to: ContactID;
	id: string;
	fromHostAccount: boolean;
	groupName?: string;
	media?: Media;
	boundaryName: string;
	quotedMessage: MessageReceived | undefined;
	contact: ContactPayload;
	messageType: MessageType;
	isViewOnce: boolean;
	taggedContacts: ContactPayload[];
};

export type MessageReceivedByGateway = MessageReceived & {
	boundaryId: string;
	timestamp: number;
};

export type ChatData = PrivateChatData | GroupChatData;

export type PrivateChatData = ContactPayload & {
	isGroup: false;
}

export type GroupChatData = {
	isGroup: true;
	name: string;
	id: string,
	description: string,
	adminList: ContactPayload[],
	membersList: ContactPayload[],
}