/*
 * Copyright (c) 2017-2018  Moddable Tech, Inc.
 *
 *   This file is part of the Moddable SDK Runtime.
 *
 *   The Moddable SDK Runtime is free software: you can redistribute it and/or modify
 *   it under the terms of the GNU Lesser General Public License as published by
 *   the Free Software Foundation, either version 3 of the License, or
 *   (at your option) any later version.
 *
 *   The Moddable SDK Runtime is distributed in the hope that it will be useful,
 *   but WITHOUT ANY WARRANTY; without even the implied warranty of
 *   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *   GNU Lesser General Public License for more details.
 *
 *   You should have received a copy of the GNU Lesser General Public License
 *   along with the Moddable SDK Runtime.  If not, see <http://www.gnu.org/licenses/>.
 *
 */

export default class Radio @ "xs_Radio_destructor" {
	constructor(dictionary) @ "xs_Radio";
	postMessage(msg) @ "xs_Radio_postMessage";
	receiveMessage(msg) {
		this.context.onMessage(msg);
	};
	listen(mode) @ "xs_Radio_listen";
	setTxPower(mode) @ "xs_Radio_setTxPower";
	getTxPower() @ "xs_Radio_getTxPower";
	waitUntilIdle() @ "xs_Radio_waitUntilIdle";
	getUnique() @ "xs_Radio_getUnique";
};

Object.freeze(Radio.prototype);

