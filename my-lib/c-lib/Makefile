CC ?= gcc
CFLAGS ?= -O2 -Wall -Wextra -std=c11
AR ?= ar
ARFLAGS ?= rcs

all: libc_lib.a

libc_lib.a: build/c_lib.o
	$(AR) $(ARFLAGS) $@ $^

build/c_lib.o: src/c_lib.c src/c_lib.h
	@mkdir -p build
	$(CC) $(CFLAGS) -c src/c_lib.c -o build/c_lib.o

clean:
	rm -rf build *.a

.PHONY: all clean
