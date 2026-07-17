import { ChatID } from '.';

export type ProxySource = {
	boundary: string;
	chats: '*' | ChatID[];
};

export type ProxyRequestPayload = {
	source: ProxySource;
	subscriber?: string;
};

export type ProxyRevokePayload =
	| {
			subscriptionId: string;
	  }
	| {
			subscriber?: string;
			source?: {
				boundary: string;
				chats?: '*' | ChatID[];
			};
	  };

export type ProxySubscriptionStatus =
	| 'active'
	| 'pending_boundary'
	| 'pending_subscriber';

export type ProxySubscription = {
	id: string;
	requestedBy: string;
	subscriber: string;
	source: ProxySource;
	status: ProxySubscriptionStatus;
	createdAt: number;
	updatedAt: number;
	expiresAt?: number;
};
