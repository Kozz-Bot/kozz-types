import { Boundary, Module } from 'src/Common/Entities';
import { Entity } from '..';

export type DashboardEvent = {
	Module_Connection: {
		name: string;
		methods: string[];
		proxy: string;
	};
	Boundary_Connection: {
		name: string;
		platform: string;
		OS: string;
	};
	Forwarded_Event: {
		name: string;
		source: Entity;
		destination: Entity;
	};
	Resource_Asked: {
		name: string;
		requestPayload?: Record<string, any>;
		requester: Entity;
		responder: Entity;
	};
	Resource_Provided: {
		name: string;
		responsePayload: Record<string, any>;
		requester: Entity;
		responder: Entity;
	};
};

export type DashboardRequest = {
	All_Boundaries: {
		requestPayload: undefined;
		responsePayload: Boundary[];
	};
	All_Modules: {
		requestPayload: undefined;
		responsePayload: Module[];
	};
	Bondary: {
		requestPayload: {
			name: string;
			data: Record<string, any>;
		};
		responsePayload: Record<string, any>;
	};
	Module: {
		requestPayload: {
			name: string;
			data: Record<string, any>;
		};
		responsePayload: Record<string, any>;
	};
};
