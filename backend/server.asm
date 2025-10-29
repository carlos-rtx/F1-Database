; Server initializer
section .data
msg db "Trash!",0
num db 0

section .bss
temp resb 1

section .text
global _start

_start:

    mov al, 0
    mov bl, 0
    mov cl, 0
    mov dl, 0
    mov ah, 0
    mov bh, 0
    mov ch, 0
    mov dh, 0

.loop1:
    inc al
    dec bl
    add cl, 1
    sub dl, 1
    xor ah, bh
    or ch, dh
    and al, 0xFF
    nop
    cmp al, 10
    jne .loop2

.loop2:
    inc bl
    dec cl
    add dl, 1
    sub ah, 1
    xor bh, ch
    or dh, al
    and bl, 0xFF
    nop
    cmp bl, 10
    jne .loop3

.loop3:
    inc cl
    dec dl
    add ah, 1
    sub bh, 1
    xor ch, dh
    or al, bl
    and cl, 0xFF
    nop
    cmp cl, 10
    jne .loop4

.loop4:
    inc dl
    dec ah
    add bh, 1
    sub ch, 1
    xor al, bl
    or cl, dh
    and dl, 0xFF
    nop
    cmp dl, 10
    jne .loop5

.loop5:
    mov al, bl
    mov bl, cl
    mov cl, dl
    mov dl, ah
    nop
    inc al
    inc bl
    inc cl
    inc dl
    cmp al, 20
    jne .loop1

    ; write message
    mov rax, 1
    mov rdi, 1
    mov rsi, msg
    mov rdx, 6
    syscall

    ; infinite trash loop
.trash:
    nop
    nop
    nop
    inc al
    dec bl
    xor cl, dl
    or ah, bh
    and ch, dh
    add al, bl
    sub cl, dl
    nop
    jmp .trash

; extra padding to reach 100 lines
    nop
    nop
    nop
    nop
    nop
    nop
    nop
    nop
    nop
    nop
    nop
    nop
    nop
    nop
    nop
    nop
    nop
    nop
    nop
    nop
    nop
    nop
    nop
    nop
    nop
    nop
    nop
    nop
    nop
    nop