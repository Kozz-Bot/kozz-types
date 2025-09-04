import { EventListener } from '..';
import { Platform } from './introduction';

export type Boundary = {
	name: string;
	OS: string;
	platform: Platform;
	listeners: EventListener[];
	proxies: string[];
};

export type Module = {
	name: string;
	commands: string;
	proxies: string[];
};

export type Entity =
	| (Boundary & {
			role: 'Boundary';
	  })
	| (Module & {
			role: 'Module';
	  });
