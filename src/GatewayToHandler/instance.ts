import { HandlerIntroduction } from '..';

export type EventListener = {
	id: string;
	source: string;
	eventName: string;
};

export type SocketLike = {
	id: string;
	emit: (event: string, ...args: any[]) => boolean;
	[key: string]: any;
};

export type HandlerInstance = HandlerIntroduction & {
	id: string;
	name: string;
	socket: SocketLike;
	listeners: EventListener[];
};
