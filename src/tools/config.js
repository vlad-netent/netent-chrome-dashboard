const mapping = new Map();

const config = [
  {
    domain: 'sta-lc-emu-cl03-01.nix.cydmodule.com:8080/emulator/tables.jsf',
    moduleName: 'emulator',
  },
];

config.forEach((el) => {
  mapping.set(el.moduleName, el.domain);
});

export default mapping;
