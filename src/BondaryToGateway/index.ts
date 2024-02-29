export * from './instance';
export * from './ForwardableEvents';

import { ContactID, ContactPayload, Media, Platform } from '../Common';

export type MessageType =
	| 'STICKER'
	| 'TEXT'
	| 'VIDEO'
	| 'IMAGE'
	| 'AUDIO'
	| 'OTHER';

export type MessageReceived = {
	platform: Platform;
	timestamp: number | undefined;
	from: ContactID;
	/**
	 * Body in its raw form
	 */
	body: string;
	/**
	 * Sanitized to remove accents and uppercase, useful to compare with other strings
	 */
	santizedBody: string;
	/**
	 * Unsanitized body but with tagged contact ids replaced with 
	 */
	taggedConctactFriendlyBody: string;
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