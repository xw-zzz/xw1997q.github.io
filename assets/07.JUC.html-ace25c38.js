import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as a,c as o,b as t}from"./app-ec12a113.js";const n="/assets/image-20240318162620263-8f5b6e38.png",c={},r=t('<h2 id="cas会产生什么问题" tabindex="-1"><a class="header-anchor" href="#cas会产生什么问题" aria-hidden="true">#</a> CAS会产生什么问题？</h2><p>1、ABA 问题： 比如说一个线程 one 从内存位置 V 中取出 A，这时候另一个线程 two 也从内存中取出 A，并且 two 进 行了一些操作变成了 B，然后 two 又将 V 位置的数据变成 A，这时候线程 one 进行 CAS 操作发现内存 中仍然是 A，然后 one 操作成功。尽管线程 one 的 CAS 操作成功，但可能存在潜藏的问题。从 Java1.5 开始 JDK 的 atomic包里提供了一个类 AtomicStampedReference 来解决 ABA 问题。</p><p>2、循环时间长开销大： 对于资源竞争严重（线程冲突严重）的情况，CAS 自旋的概率会比较大，从而浪费更多的 CPU 资源， 效率低于 synchronized。</p><p>3、只能保证一个共享变量的原子操作： 当对一个共享变量执行操作时，我们可以使用循环 CAS 的方式来保证原子操作，但是对多个共享变量 操作时，循环 CAS 就无法保证操作的原子性，这个时候就可以用锁。</p><h2 id="介绍下aqs" tabindex="-1"><a class="header-anchor" href="#介绍下aqs" aria-hidden="true">#</a> 介绍下AQS</h2><p>AQS核心思想是，如果被请求的共享资源空闲，则将当前请求资源的线程设置为有效的工作线程，并且将共享资源设置为锁定状态。如果被请求的共享资源被占用，那么就需要一套线程阻塞等待以及被唤醒时锁分配的机制，这个机制AQS是用CLH队列锁实现的，即将暂时获取不到锁的线程加入到队列中。</p><blockquote><p>CLH(Craig,Landin,and Hagersten)队列是一个虚拟的双向队列（虚拟的双向队列即不存在队列实 例，仅存在结点之间的关联关系）。AQS是将每条请求共享资源的线程封装成一个CLH锁队列的 一个结点（Node）来实现锁的分配。</p></blockquote><p><img src="'+n+'" alt="image-20240318162620263" loading="lazy"></p><p>AQS使用一个int成员变量来表示同步状态，通过内置的FIFO队列来完成获取资源线程的排队工作。AQS 使用CAS对该同步状态进行原子操作实现对其值的修改。</p><p>AQS定义两种资源共享方式</p><p>Exclusive（独占）：只有一个线程能执行，如ReentrantLock。又可分为公平锁和非公平锁：</p><p>公平锁：按照线程在队列中的排队顺序，先到者先拿到锁</p><p>非公平锁：当线程要获取锁时，无视队列顺序直接去抢锁，谁抢到就是谁的</p><p>Share（共享）：多个线程可同时执行，如Semaphore/CountDownLatch。Semaphore、 CountDownLatch、 CyclicBarrier、ReadWriteLock 我们都会在后面讲到。</p>',14),p=[r];function i(s,d){return a(),o("div",null,p)}const _=e(c,[["render",i],["__file","07.JUC.html.vue"]]);export{_ as default};