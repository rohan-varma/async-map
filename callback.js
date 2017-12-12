//Basic example of how callbacks work



const longJob = () => {
	setTimeout(() => {
		console.log('job1 finished, returning return value')
		return 5;
	}, 1000)
}


//do a long job, get its return value, and log that

//THIS won't work

const ret = longJob()
console.log(ret)


//instead, pass in what you want to run after the async function is completed as a callback:

const longJob2 = cb => {
	setTimeout(() => {
		console.log('job finished, returning return value')
		cb(5)
	}, 1000)
}

longJob2(result => console.log(result))
//job finished, returning return value
//5

//Q: why won't this run as expected above?

const longJob3 = cb => {
	setTimeout(() => {
		console.log('job finished, returning return value')
	}, 1000)
	cb(5)
}

longJob3(result => console.log(result))

