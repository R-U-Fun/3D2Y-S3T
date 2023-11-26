class XorOSingleton {
	constructor() {
		if (!XorOSingleton.instance) {
			this.XorO = null;
			XorOSingleton.instance = this;
		}
		return XorOSingleton.instance;
	}

	setXorO(XorO) {
		this.XorO = XorO;
	}

	getXorO() {
		return this.XorO;
	}
}

const XorOObj = new XorOSingleton();
export default XorOObj;
