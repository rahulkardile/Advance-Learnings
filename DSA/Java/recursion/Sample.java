package recursion;

public class Sample {

    public static void printName(int n){
        if(n == 0){
            return;
        }
        System.out.println("RAHUL");
        printName(--n);
    }

    public static void OneToN(int n, int s){
        System.out.println(s);
        if(s == n){
            return;
        }
        OneToN(n, ++s);
    }

    public static void NToOne(int n){
        System.out.println(n);
        if(n == 1){
            return;
        }
        NToOne(--n);
    }

    // Back Tracking
    public static void OneToNViaBackTracting(int n){
        if(n < 1) return;
        OneToNViaBackTracting(n-1);
        System.out.println(n);
    }

    public static void NToOneBT(int n, int s){
        if(n < s) return;
        NToOneBT(n, s+1);
        System.out.println(s);
    }
    
    public static void SumNNaturalNumbers(int i, int sum){
        if(i < 1){
            System.out.println(sum);
            return;
        }
        SumNNaturalNumbers(i-1, sum+i);
    }

    public static void factorial(int num,int fact){
        if(num <= 1){
            System.out.println(fact);
            return;
        }
        factorial(num - 1,  fact * num);
    }

    public static void main(String[] args) {
        // printName(5);
        // OneToN(10, 1);
        // NToOne(10);

        // Back Tracking
        // OneToNViaBackTracting(10);
        // NToOneBT(10, 1);

        // test
        // parameterized method
        // SumNNaturalNumbers(3, 0);
        factorial(10, 1);

    }

}