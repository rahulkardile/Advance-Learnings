#include <bits/stdc++.h>
using namespace std;

// * * * * 
// * * * * 
// * * * * 
// * * * * 
void print1(int n) {
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < 4; j++) {
            cout << "* "; 
        }
        cout << endl;
    }
}

// *
// **
// ***
// ****
// *****
void print2(int n){
    for (int i = 0; i <= n; i++)
    {
        for (int j = 0; j < i; j++)
        {
            cout << "*";
        }
        cout << endl;        
    }
    
}

// 0 
// 0 1 
// 0 1 2 
// 0 1 2 3 
// 0 1 2 3 4 
void print3(int n) {
    for (int i = 0; i < n; i++) {
        for (int j = 0; j <= i; j++) {
            cout << j << " ";
        }
        cout << endl;
    }
}

// 0 
// 1 1 
// 2 2 2 
// 3 3 3 3 
// 4 4 4 4 4 
void print4(int n) {
    for (int i = 0; i < n; i++) {
        for (int j = 0; j <= i; j++) {
            cout << i << " ";
        }
        cout << endl;
    }
}

// 5 4 3 2 1 
// 4 3 2 1 
// 3 2 1 
// 2 1 
// 1 
void print5(int n){
    for(int i = n; i >= 1; i--) {
        for(int j = i; j >= 1; j--) {
            cout << j << " ";
        }
        cout << endl;
    }
}

void print6(int n){
    for(int i = 0; i< n; i++){
       // spaces 
        for (int j = 0; j < n-i-1; j++)
        {
            cout << " ";
        }

       // stars 
        for(int j = 0; j < 2 * i + 1; j++){
            cout << "*";
        }

       // spaces
        for (int j = 0; j < n - i - 1; j++)
        {
            cout << " ";
        }
        cout << endl;
    }
}

int main() {
    //  compile it throw cmd : g++ CPP/patterns/Pattern.cpp  -o program 
    //  run ./program 

    int n = 6;

    print6(n);
    return 0;

}