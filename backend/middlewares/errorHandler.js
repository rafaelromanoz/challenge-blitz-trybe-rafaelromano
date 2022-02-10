module.exports = (error, req, res, _next) => {
  if (error.codeError) {
    const { codeError, message } = error;
    return res.status(codeError).json({ message });
  }
  return res.status(500).json({ message: 'Internal error' });
};
