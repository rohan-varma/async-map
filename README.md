### async-map

Implementation of async mapping function, based on http://clarkfeusier.com/2015/01/18/interview-question-asynchronous-map.

The function `asyncMap` takes a list of jobs that each take their own callback, runs the job, and then invokes the callback for that job. Another separately passed in callback should be invoked on the result of all of thejobs.

