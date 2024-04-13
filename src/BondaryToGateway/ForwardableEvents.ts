import { ChatID, ContactPayload, SendMessagePayload } from '..';

export type ForwardableUserJoinedGroup = {
	whoAdded: ContactPayload | undefined;
	membersAdded: ContactPayload[];
	chatId: ChatID;
};

export type ForwardableUserLeftGroup = {
	contact: ContactPayload;
	chatId: ChatID;
};

export type ForwardableUserKickedFromGroup = {
	contact: ContactPayload;
	whoKicked: ContactPayload;
	chatId: ChatID;
};

export type ForwadableUserMentioned = {
	contact: ContactPayload;
	chatId: ChatID;
	message: SendMessagePayload;
};
