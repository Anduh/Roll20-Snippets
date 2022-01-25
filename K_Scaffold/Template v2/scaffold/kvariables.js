const kFuncs = {
	/**
	 * This stores the name of your sheet for use in the logging functions {@link k.log} and {@link k.debug}
	 * @type {string}
	 * @name k.sheetName
	 */
	sheetName:'kScaffold Powered Sheet',
	/**
	 * This stores the version of your sheet for use in the logging functions{@link k.log} and {@link k.debug}. It is also stored in the sheet_version attribute on your character sheet.
	 * @type {number}
	 * @name k.version
	 */
	version:0,
	/**
	 * A boolean flag that tells the script whether to enable or disable {@link k.debug} calls. If the version of the sheet is `0`, or an attribute named `debug_mode` is found on opening this is set to true for your entire session. Otherwise, it remains false.
	 * @type {boolean}
	 * @name k.debugMode
	 */
	debugMode:false,
	/**
	 * An object to store your update functions in. Functions should be index by the version they are for (e.g. the update handler for version 1.01 would be indexed to '1.01'). These update functions will be iterated through based on the previous version of the sheet (as stored in the `sheet_version` attribute of the sheet) and the new version of the sheet (as stored in {@link k.version}).
	 * @type {object}
	 * @name k.updateHandlers
	 */
	updateHandlers:{}
};