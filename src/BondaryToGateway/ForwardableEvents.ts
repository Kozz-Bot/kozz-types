import { ChatID, ContactPayload, SendMessagePayload } from '..';

export type UserJoinedGroupChat = {
	contact: ContactPayload;
	chatId: ChatID;
};

export type UserLeftGroupChat = {
	contact: ContactPayload;
	chatId: ChatID;
};

export type HostTagged = {
	contact: ContactPayload;
	chatId: ChatID;
	message: SendMessagePayload;
};
