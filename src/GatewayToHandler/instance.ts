import { type Socket } from 'socket.io';
import { HandlerIntroduction } from '..';

export type EventListener = {
	id: string;
	source: string;
	eventName: string;
};

export type HandlerInstance = HandlerIntroduction & {
	id: string;
	socket: Socket;
	listeners: EventListener[];
};
