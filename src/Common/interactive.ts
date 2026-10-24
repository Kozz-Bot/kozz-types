/** Reply buttons supported by Kozz. Limits are deliberately conservative. */
export type ReplyButton = {
	id: string;
	label: string;
	/** An existing Kozz command; handled with the clicking user's permissions. */
	command: string;
};

export type ReplyButtonsOptions = {
	buttons: ReplyButton[];
	footer?: string;
	/** Defaults to the requester, including in groups. */
	audience?: 'requester' | 'chat';
	/** Defaults to 15 minutes; maximum 24 hours. */
	expiresInMs?: number;
};

export type InteractiveButtons = ReplyButtonsOptions & {
	type: 'buttons';
	allowedContactId?: string;
};

export type InteractiveResponse = {
	type: 'reply' | 'list' | 'native';
	id?: string;
	label?: string;
	name?: string;
	originalMessageId?: string;
	/** Set only by the boundary after validating its persisted button mapping. */
	command?: string;
	status?: 'accepted' | 'unrecognized' | 'expired' | 'wrong_sender' | 'duplicate';
};
