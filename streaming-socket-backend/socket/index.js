module.exports = (io) => {
    io.on('connect', (socket) => {
        console.log('user connected');
        socket.on('getAllDashboardData', (data) => {
            //send some data to client back
            socket.emit('getAllDashboardData', {data: 'data'});
        });
        socket.on('disconnect', () => {
            console.log('user disconnected');
        });
    });
}
