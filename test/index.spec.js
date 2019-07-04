define([
    'src/index'
], function(index) {
    describe('math operations spec', function() {
        it('should return addition result', function test() {
            expect(index.add(1,2)).toBe(3);
        });

        it('should return subtraction result', function test() {
            expect(index.sub(2,1)).toBe(1);
        });

        it('should return multiplication result', function test() {
            expect(index.mul(2,2)).toBe(4);
        });

        it('should return division result', function test() {
            expect(index.div(2,2)).toBe(1);
        });
    });
});
