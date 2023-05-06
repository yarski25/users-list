import { PairsPipe } from './pairs.pipe';

describe('PairsPipe', () => {

  const pipe = new PairsPipe();

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });
  
  it('transforms [] to []', () => {
    const inputValue: Array<any> = [];
    const outputValue: Array<any> = [];
    expect(pipe.transform(inputValue)).toStrictEqual(outputValue);
  });

  it('transforms ["user1"] to [["user1", undefined]]', () => {
    const inputValue: Array<any>  = ['user1'];
    const outputValue: Array<Array<any>>  = [['user1', undefined]];
    expect(pipe.transform(inputValue)).toStrictEqual(outputValue);
  });

  it('transforms ["user1", "user2"] to [["user1", "user2"]]', () => {
    const inputValue: Array<any>  = ['user1','user2'];
    const outputValue: Array<Array<any>>  = [['user1', 'user2']];
    expect(pipe.transform(inputValue)).toStrictEqual(outputValue);
  });

  it('transforms ["user1", "user2", "user3"] to [["user1", "user2"], ["user3", undefined]]', () => {
    const inputValue: Array<any>  = ['user1','user2','user3'];
    const outputValue: Array<Array<any>>  = [['user1', 'user2'],['user3', undefined]];
    expect(pipe.transform(inputValue)).toStrictEqual(outputValue);
  });

  it('transforms ["user1", "user2", "user3", "user4"] to [["user1", "user2"], ["user3", "user4"]]', () => {
    const inputValue: Array<any>  = ['user1', 'user2', 'user3', 'user4'];
    const outputValue: Array<Array<any>>  = [['user1', 'user2'], ['user3', 'user4']];
    expect(pipe.transform(inputValue)).toStrictEqual(outputValue);
  });
  
  // ... more tests ...

});
