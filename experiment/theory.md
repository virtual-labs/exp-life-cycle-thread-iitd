### Thread
- Threads allows a program to operate more efficiently by doing multiple things at the same time.
- Threads can be used to perform complicated tasks in the background without interrupting the main program.

---

#### How to create thread
There are two ways to create a thread :
- By extending Thread class.
- By implementing Runnable interface.
	
### Thread class

Thread class provide constructors and methods to create and perform operations on a thread.
Thread class extends Object class and implements Runnable interface.

### Runnable interface

The Runnable interface should be implemented by any class whose instances are intended to be executed by a thread. Runnable interface have only one method named run().
public void run(): is used to perform action for a thread.

### 1. Create a Thread by Extending a Thread Class

#### Step 1

You will need to override run( ) method available in Thread class. This method provides an entry point for the thread and you will put your complete business logic inside this method. 
Following is a simple syntax of **run() method** –

```
public void run( )
```

#### Step 2

Once Thread object is created, you can start it by calling **start()** method, which executes a call to
run( ) method. Following is a simple syntax of **start() method** −

```
void start( );
```
#### Example:
Example Here is the preceding program rewritten to extend the Thread

```
classThreadDemoextendsThread{
privateThread t;
privateStringthreadName;

ThreadDemo(String name){
threadName= name;
System.out.println("Creating "+threadName);
}

publicvoid run(){
System.out.println("Running "+threadName);
try{
for(int i =4; i >0; i--){
System.out.println("Thread: "+threadName+", "+ i);
// Let the thread sleep for a while.
Thread.sleep(50);
}
}catch(InterruptedException e){
System.out.println("Thread "+threadName+" interrupted.");
}
System.out.println("Thread "+threadName+" exiting.");
}

publicvoid start (){
System.out.println("Starting "+threadName);
if(t ==null){
         t =newThread(this,threadName);
t.start();
}
}
}

publicclassTestThread{

publicstaticvoid main(Stringargs[]){
ThreadDemo T1 =newThreadDemo("Thread-1");
T1.start();

ThreadDemo T2 =newThreadDemo("Thread-2");
T2.start();
}
}

```

#### OUTPUT

```
Creating Thread-1
Starting Thread-1
Creating Thread-2
Starting Thread-2
Running Thread-1
Thread: Thread-1, 4
Running Thread-2
Thread: Thread-2, 4
Thread: Thread-1, 3
Thread: Thread-2, 3
Thread: Thread-1, 2
Thread: Thread-2, 2
Thread: Thread-1, 1
Thread: Thread-2, 1
Thread Thread-1 exiting.
Thread Thread-2 exiting.

```

### 2. Create a Thread by Implementing a Runnable Interface

#### Step 1
you need to implement a run() method provided by a Runnable interface. This method provides an entry point for the thread and you will put your complete logic inside this method. Following is a simple syntax of the **run() method** −

```
public void run( )
```

#### Step 2
you will instantiate a Thread object using the following constructor –

```
Thread(Runnable threadObj, String threadName);
```
Where, threadObj is an instance of a class that implements the Runnable interface and threadName is the name given to the new thread.

#### Step 3
Once a Thread object is created, you can start it by calling start() method, which executes a call to run( ) method. Following is a simple syntax of **start() method**−

```
void start();
```

#### Example:
Here is an example that creates a new thread and starts running it −

```
	class Multi3 implements Runnable{  
	public void run(){  
	System.out.println("thread is running...");  
	}  
	  
	public static void main(String args[]){  
	Multi3 m1=new Multi3();  
	Thread t1 =new Thread(m1);  
	t1.start();  
}  
}  

```

#### OUTPUT

```
Output:thread is running...
```
### Differences between "extending" and "implementing" Threads
The major difference is that when a class extends the Thread class, you cannot extend any other class, but by implementing the Runnable interface, it is possible to extend from another class as well.
