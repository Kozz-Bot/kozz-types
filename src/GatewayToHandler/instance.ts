import { type Socket } from 'socket.io';
import { HandlerIntroduction } from '..';

export type HandlerInstance = HandlerIntroduction & {
	id: string;
	socket: Socket;
};
