import './style.css';

// import { fromEvent, timer } from 'rxjs';
// import { debounceTime, map } from 'rxjs/operators';

// const inputElement = document.createElement('input');
// inputElement.id = 'example';
// document.body.appendChild(inputElement);

// const input = document.getElementById('example');

// // 对于每次键盘敲击，都将映射成当前输入值
// const example = fromEvent(input, 'keyup').pipe(
//   map((i) => (i.target as HTMLInputElement).value)
// );

// // 在两次键盘敲击之间等待0.5秒方才发出当前值，
// // 并丢弃这0.5秒内的所有其他值
// const debouncedInput = example.pipe(debounceTime(500));

// // 输出值
// const subscribe = debouncedInput.subscribe((val) => {
//   console.log(`Debounced Input: ${val}`);
// });

import './app';
