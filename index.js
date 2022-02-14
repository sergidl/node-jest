class SortedList {
	items = [];
	length = 0;
	add(item) {
		this.items.push(item)
		this.length++
	}
	get(pos) {
		this.items.sort(function (a, b) { return a - b });
		let odd = 0;
		let chk = pos
		while (odd == 0) {
			if (this.items[chk - 1] != undefined) {


				if (this.items[chk - 1] % 2 != 0) {
					return this.items[chk - 1]
				}
				chk++

			}
			else {
				throw new Error("OutOfBounds Error")
			}

		};
	}
	max() {
		if (this.items[0] != undefined) {
			return Math.max(...this.items)
		}
		else {
			throw new Error('EmptyList Error')
		}
	}
	min() {
		if (this.items[0] != undefined) {
			return Math.min(...this.items)
		}
		else {
			throw new Error('EmptyList Error')
		}
	}
	average() {
		if (this.items[0] != undefined) {
			let tmp = 0;
			this.items.forEach(e => {
				tmp = tmp + e;
			});
			return tmp / this.items.length
		}
		else {
			throw new Error('EmptyList Error')
		}
	}
	sum() {
		if (this.items[0] != undefined) {
			let tmp = 0;
			this.items.forEach(e => {
				tmp = tmp + e;
			});
			return tmp
		}
		else {
			throw new Error('EmptyList Error')
		}
	}
	even(pos) {
		if (this.items[pos - 1] != undefined) {
			let num = this.items[pos - 1]
			if (num % 2 == 0) {
				return num
			}
			else {
				throw new Error('Not Even')
			}
		}
		else {
			throw new Error("OutOfBounds Error")
		}

	}
}
// let sl = new SortedList();
// let item = 10;
//          for(let i=1; i<200; i++) {
//            sl.add(item*i);
//            console.log(`${item*i}==================`)
//            console.log('-------------------------------------------------')

//          }
export default SortedList;
