import { ContactPayload, MessageReceived, SendMessagePayload } from '..';

export type Command = {
	method: string;
	immediateArg: string | null;
	namedArgs: Record<string, string | number | boolean> | null;
	message: MessageReceived;
	boundaryId: string;
	query: string;
	taggedContacts: ContactPayload[];
};
