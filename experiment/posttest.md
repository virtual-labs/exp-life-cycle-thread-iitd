## Post Test

Q1. Which class or interface defines the wait(), notify(),and notifyAll() methods?<br>
**A Object**<br>
B Thread<br>
C Runnable<br>
D Class<br>

Q2. Which of the following line of code is suitable to start a thread ?<br>
A  Thread t = new Thread(X);<br>
B  Thread t = new Thread(X); t.start();<br>
**C X run = new X(); Thread t = new Thread(run); t.start();**<br>
D Thread t = new Thread(); x.run();<br>

Q3. What is maximum thread priority in Java<br>
**A 10**<br>
B 12<br>
C 5<br>
D 8<br>

Q4. Which will contain the body of the thread?<br>
**A start()**<br>
B run()<br>
C stop()<br>
D main()<br>

Q5. Number of threads in below java program is
public class ThreadExtended extends Thread {

	public void run() {
		System.out.println("\nThread is running now\n");
	}

	public static void main(String[] args) {

		ThreadExtendedthreadE = new ThreadExtended();

		threadE.start();
}
}<br>
A 0<br>
B 1<br>
**C 2**<br>
D 3<br>