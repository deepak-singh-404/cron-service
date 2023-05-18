const { CronJob } = require('cron')
const cronJobsConfig = require('./config/cron')
const { makeNetworkRequest } = require('./utils/restTemplate')

const cronJobs = () => {
    return new Promise(async (resolve, reject) => {
        const jobs = []
        for (let jobConfig in cronJobsConfig) {
            try {
                const currentJobs = cronJobsConfig[jobConfig]
                console.log("CURRENT_JOB", currentJobs)

                //Iterate through all the jobs
                for (let job of currentJobs.jobs) {
                    console.log(`RUNNING : JOB:: ${job.name}`)
                    const _job = new CronJob(job.schedule, async () => {
                        try {
                            let url = currentJobs.baseUrl + job.path
                            let method = "Get"
                            const res = await makeNetworkRequest(url, method)
                            console.log("res", res)
                        }
                        catch (err) {
                            console.log("TRIGGER MAIL")
                        }
                    }, null, true)
                    _job.start()
                }
            }
            catch (err) {
                console.log("exceptionError: ", err.message)
            }
        }
        resolve(jobs)
    })
}

cronJobs()
