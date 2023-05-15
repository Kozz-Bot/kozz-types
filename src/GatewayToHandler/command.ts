import { MessageReceived, SendMessagePayload } from '..';

export type Command = {
	method: string;
	immediateArg: string | null;
	namedArgs: Record<string, string>;
	message: MessageReceived;
	boundaryId: string;
};
