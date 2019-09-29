const typeGenerator = type => ({
  SUCCESS: `${type}_SUCCESS`,
  REQUEST: `${type}_REQUEST`,
  FAILED: `${type}_FAILED`,
});

export default typeGenerator;
