#include <bits/stdc++.h>
using namespace std;

// * * * * 
// * * * * 
// * * * * 
// * * * * 
void print1() {
    for (int i = 0; i < 4; i++) {
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
void print2(){
    for (int i = 0; i <= 5; i++)
    {
        for (int j = 0; j < i; j++)
        {
            cout << "*";
        }
        cout << endl;        
    }
    
}

void print3() {
    for (int i = 0; i < 5; i++) {
        for (int j = 0; j <= i; j++) {
            cout << j << " ";
        }
        cout << endl;
    }
}


int main() {
    //  compile it throw cmd : g++ CPP/patterns/Pattern.cpp  -o program 
    //  run ./program 

    print3();
    return 0;

}