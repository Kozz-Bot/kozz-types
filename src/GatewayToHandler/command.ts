import { MessageReceived, SendMessagePayload } from '..';

export type Command = {
	method: string;
	immediateArg: string | 'default';
	namedArgs: Record<string, string>;
	message: MessageReceived;
	boundaryId: string;
};
