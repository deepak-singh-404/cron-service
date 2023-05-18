module.exports = {
    "PLATFORM_SERVICE": {
        "baseUrl": "https://api.servimate.in",
        "jobs": [{
            "name": "PLATFORM SERVICE HEALTH CHECK",
            "schedule": "*/1 * * * * *",
            "path": "/customer/"
        }]
    },
    "CART_SERVICE": {
        "baseUrl": "https://nodeapi.digimro.com",
        "jobs": [{
            "name": "CART SERVICE HEALTH CHECK",
            "schedule": "*/1 * * * * *",
            "path": "/digimro/api/ping"
        }]
    }
}




