const Client = require('./adb/client')
import Keycode = require('./adb/keycode');

import util = require('./adb/util');

export class adb {
    static createClient(options: any = {}) {
        if (!options.host) {
            options.host = process.env.ADB_HOST
        }
        if (!options.port) {
            options.port = process.env.ADB_PORT
        }
        return new Client(options)
    }

    static Keycode = Keycode.keycode;
    static util = util;
}


