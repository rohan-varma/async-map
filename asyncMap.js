
//simulate a job: do some async processing (basically waiting in this case) and then invoke a callback
const job1 = cb => setTimeout(() => cb('first'), 900);

const job2 = cb => setTimeout(() => cb('second'), 100);

const job3 = cb => setTimeout(() => cb('third'), 300);


const jobs = [job1, job2, job3]

const callback = results => console.log('the results', results);
//asyncMap(jobs, callback) should return 'first', 'second', 'third'

const asyncMap = (jobs, callback) => {
	const results = [];
	let finished = 0;
	for(let i = 0; i < jobs.length; i++) {
		(job => job(result => {
			results[i] = result;
			finished++;
			if (finished === jobs.length) {
				callback(results);
			}
		}))(jobs[i]);
	}
}

const functionalAsyncMap = (jobs, callback) => {
	const results = [];
	let finished = 0;
	jobs.forEach((job, i) => {
		job(result => {
			results[i] = result;
			finished++;
			if (finished === jobs.length) {
				callback(results);
			}
		});
	});
}

// /asyncMap(jobs, callback);
functionalAsyncMap(jobs, callback);

// each([1, 2, 3,], (element, i) => console.log(element, i));
// console.log(filter([1, 2, 3, 4], a => a % 2 === 0));
//each(iterable, function(a, b) ... do stuff)