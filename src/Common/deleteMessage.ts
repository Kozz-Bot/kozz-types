export type DeleteMessagePayload = {
	boundaryName: string;
	messageId: string;
	/**
	 * Set true to delete the message only locally in the host account message databse.
	 * Setting it to true will delete the message to everyone in the platform. Works like
	 * the `unsend` from facebook.
	 */
	localDelete: boolean;
};
