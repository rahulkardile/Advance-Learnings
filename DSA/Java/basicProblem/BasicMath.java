package Java.basicProblem;

public class BasicMath {

    public static int countDigit(int n){
        int count = 0;
        while(n > 0){
            count++;
            n = n / 10;
        }
        return count;
    }

    public static int reverseNumber(int n){
        boolean negetive = false;
        if(n < 0){
            negetive = true;
            n = -n;
        }
        int reversNum = 0;
        while(n > 0){
            int lastDigit = n % 10;
            n = n / 10;
            reversNum = (reversNum * 10) + lastDigit;
        }
        if(negetive){
            reversNum = -reversNum;
        }
        return reversNum;
    }

    public static void main(String[] args) {
        System.out.println("total number count is : " + countDigit(7849));
        System.out.println("revers number is : " + reverseNumber(-7849));
    }
    
}