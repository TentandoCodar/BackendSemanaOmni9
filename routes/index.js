const SessionController = require('../src/controllers/Session');
const SpotController = require('../src/controllers/Spot');
const DashBoadard = require('../src/controllers/DashBoard');
const BookingController = require('../src/controllers/Booking');
const Multer = require('multer')
const uploadConfig = require('../src/config/multer');

const upload = Multer(uploadConfig)


module.exports = (app) => {
    app.post('/UserStore', SessionController.Store);
    app.post('/SpotCreate',upload.single('thumbnail'),SpotController.store);
    app.get('/SpotIndex',SpotController.index);
    app.get('/dashboards', DashBoadard.show);

    app.post('/spots/:spot_id/bookings', BookingController.store)
}