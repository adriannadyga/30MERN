// module.exports = {
//     PORT: 8000,
//     DB: 'mongodb+srv://kodilla1:kodilla1@cluster0-z4q7j.mongodb.net/test?retryWrites=true&w=majority',
//   };

module.exports = {
  PORT: process.env.PORT || 8000,
  DB: process.env.DB,
};