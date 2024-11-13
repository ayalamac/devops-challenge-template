// hello.test.js
const { sayHello } = require('./hello');

test('should include participant name', () => {
    const result = sayHello('DevOps Tester');
    expect(result).toContain('DevOps Tester');
});

test('should include WillDevp name', () => {
    const result = sayHello('Participante');
    expect(result).toContain('WillDevp');
});

test('should return a string', () => {
    const result = sayHello('Test');
    expect(typeof result).toBe('string');
});